'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { developerInfo } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import SocialLinks from '@/components/shared/SocialLinks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2, Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  success: false,
};

const ContactSection: React.FC = () => {
  const [formState, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  // This variable is needed to track form submission status for the submit button
  const {formState: {isSubmitting}} = form;


  useEffect(() => {
    if (formState.message) {
      if (formState.success) {
        toast({
          title: 'Success!',
          description: formState.message,
        });
        form.reset(); // Reset form on successful submission
      } else {
        toast({
          title: 'Error',
          description: formState.message || "Failed to send message. Please try again.",
          variant: 'destructive',
        });
        if (formState.issues) {
          formState.issues.forEach(issue => console.error(issue)); // Log issues
        }
      }
    }
  }, [formState, toast, form]);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value])
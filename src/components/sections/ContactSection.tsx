
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
  
  const {formState: {isSubmitting}} = form;


  useEffect(() => {
    if (formState.message) {
      if (formState.success) {
        toast({
          title: 'Success!',
          description: formState.message,
        });
        form.reset(); 
      } else {
        toast({
          title: 'Error',
          description: formState.message || "Failed to send message. Please try again.",
          variant: 'destructive',
        });
        if (formState.issues) {
          // Map server-side errors to react-hook-form fields if possible
          // For now, just logging them as an example
          formState.issues.forEach(issue => {
            // A more robust solution would map issue.path to field names
            console.error(`Server validation issue: ${issue}`);
          });
        }
         // Populate form fields with previous values if submission failed and fields are available
        if (formState.fields) {
            let fieldName: keyof ContactFormValues;
            for (fieldName in formState.fields as any) { // Use 'as any' for broader compatibility if needed
                if (form.getValues(fieldName) !== undefined && formState.fields[fieldName]) {
                     form.setValue(fieldName, formState.fields[fieldName] as string);
                }
            }
        }
      }
    }
  }, [formState, toast, form]);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formAction(formData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get In Touch" subtitle="Have a question or want to work together? Send me a message!" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center !text-primary">
                <Mail className="h-6 w-6 mr-2 text-accent" />
                Send a Message
              </CardTitle>
              <CardDescription>Fill out the form below, and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="e.g., jane.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hi Alex, I'd like to discuss..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center !text-primary">
                  <Phone className="h-6 w-6 mr-2 text-accent" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-center text-foreground">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href={`mailto:${developerInfo.email}`} className="hover:text-accent transition-colors">
                    {developerInfo.email}
                  </a>
                </p>
                {/* Example for phone, if you add it to developerInfo */}
                {/* <p className="flex items-center text-foreground">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </p> */}
                {/* Example for location, if you add it to developerInfo */}
                {/* <p className="flex items-center text-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </p> */}
                 <div className="pt-2">
                   <SocialLinks links={developerInfo.socialLinks} email={developerInfo.email}/>
                 </div>
              </CardContent>
            </Card>

             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center !text-primary">
                  <MapPin className="h-6 w-6 mr-2 text-accent" />
                 My Location (Conceptual)
                </CardTitle>
                 <CardDescription>This is a placeholder and does not represent a real address.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for a map or location details */}
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Map Placeholder
                </div>
                 <p className="text-xs text-muted-foreground mt-2">Office hours by appointment only.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

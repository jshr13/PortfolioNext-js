'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateElevatorPitchAction, type ElevatorPitchState } from '@/app/actions';
import { developerInfo } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import type { GenerateElevatorPitchInput } from '@/ai/flows/generate-elevator-pitch';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  title: z.string().min(1, 'Title is required'),
  experienceSummary: z.string().min(20, 'Experience summary must be at least 20 characters'),
  skills: z.string().min(5, 'Skills list must be at least 5 characters (e.g., React, Node.js)'),
  careerGoals: z.string().min(10, 'Career goals must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const ElevatorPitchSection: React.FC = () => {
  const [state, setState] = useState<ElevatorPitchState>({ isLoading: false });
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: developerInfo.name,
      title: developerInfo.title,
      experienceSummary: '',
      skills: '',
      careerGoals: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setState({ isLoading: true });
    const result = await generateElevatorPitchAction(data as GenerateElevatorPitchInput);
    setState(result);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.pitch) {
      toast({
        title: 'Elevator Pitch Generated!',
        description: 'Your AI-powered pitch is ready.',
      });
    }
  };

  return (
    <section id="ai-pitch" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="AI Elevator Pitch Generator"
          subtitle="Need a quick summary? Let AI craft an elevator pitch based on your profile details."
        />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center !text-primary">
                <Wand2 className="h-6 w-6 mr-2 text-accent" />
                Generate Your Pitch
              </CardTitle>
              <CardDescription>Fill in the details below, and our AI will generate a concise elevator pitch for you.</CardDescription>
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
                          <Input placeholder="e.g., Alex Johnson" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Senior Full Stack Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experienceSummary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Summary</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Briefly summarize your key roles, responsibilities, and achievements..." {...field} rows={4}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Skills</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Next.js, TypeScript, Node.js, PostgreSQL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="careerGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Career Goals</FormLabel>
                        <FormControl>
                          <Textarea placeholder="What are your career aspirations?" {...field} rows={3}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={state.isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {state.isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Pitch
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="shadow-lg sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center !text-primary">
                <Lightbulb className="h-6 w-6 mr-2 text-accent" />
                Your Generated Pitch
              </CardTitle>
              <CardDescription>
                {state.isLoading ? "Generating, please wait..." : (state.pitch || state.error ? "" : "Your pitch will appear here once generated.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px]">
              {state.isLoading && (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-accent" />
                </div>
              )}
              {state.error && (
                <p className="text-destructive text-sm">{state.error}</p>
              )}
              {state.pitch && !state.isLoading && (
                <p className="text-foreground whitespace-pre-line leading-relaxed">{state.pitch}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitchSection;
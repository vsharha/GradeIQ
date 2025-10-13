"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { redirect } from "next/navigation";

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  async function onSubmit(data) {
    const { email, password } = data;

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast(error.message);
    } else {
      return redirect("/app");
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control = {form.control}
          name = "email"
          render={({field})=> (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="email"/>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control = {form.control}
          name = "password"
          render={({field})=> (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" type="password" {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <Button>Log in</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
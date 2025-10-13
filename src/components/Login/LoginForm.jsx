"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import BlockLoader from "@/components/loader/BlockLoader";

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  async function onSubmit(data) {
    setIsLoading(true)
    const { email, password } = data;

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast(error.message);
      setIsLoading(false)
    } else {
      await supabase.auth.getSession();
      router.push("/app")
      router.refresh()
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control = {form.control}
          name = "email"
          disabled={isLoading}
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
          disabled={isLoading}
          render={({field})=> (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" type="password" {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading?
            <BlockLoader size={3}/>
            :
            <span>Log in</span>
          }
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
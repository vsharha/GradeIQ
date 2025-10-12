"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Page() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-heading">Log in</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="flex flex-col gap-5">
            <div>
              <FormField
                control = {form.control}
                name = "username"
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field}/>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
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
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Page;
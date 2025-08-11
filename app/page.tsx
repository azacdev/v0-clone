"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: (data) => {
        toast.success(data.ok);
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ email: "azacdev@gmail.com" })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
}

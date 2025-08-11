import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-to-download", "10s");

    // wait to download
    await step.sleep("transcription", "10s");

    // transacription
    await step.sleep("finishing", "10s");
    return { message: `Hello ${event.data.email}!` };
  }
);

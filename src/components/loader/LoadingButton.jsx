import BlockLoader from "@/components/loader/BlockLoader";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

function LoadingButton({ isLoading, children, type, loadingMessages: customMessages, messageInterval = 2000, ...props }) {
  const [loadingMessage, setLoadingMessage] = useState("");

  const defaultMessages = [
    "Crunching grades...",
    "Consulting the grading oracle...",
    "Applying fairness filters...",
    "Polishing rubrics...",
    "Formatting constructive feedback...",
    "Summoning teaching assistants (virtual)...",
    "Calibrating confidence scores...",
    "Searching for the perfect comment...",
    "Checking for academic flair...",
    "Optimising for clarity and kindness...",
  ];

  const messages = useMemo(() => {
    return Array.isArray(customMessages) && customMessages.length > 0 ? customMessages : defaultMessages;
  }, [customMessages]);

  useEffect(() => {
    if (!isLoading || type !== "generate") {
      setLoadingMessage("");
      return;
    }

    let index = Math.floor(Math.random() * messages.length);
    setLoadingMessage(messages[index]);

    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingMessage(messages[index]);
    }, messageInterval);

    return () => clearInterval(interval);
  }, [isLoading, messageInterval, messages, type]);

  return (
    <Button disabled={isLoading} {...props}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        {isLoading ? (
          <>
            <BlockLoader />
            {type === "generate" ? (
              <span style={{ fontSize: 14 }} aria-live="polite">{loadingMessage}</span>
            ) : null}
          </>
        ) : (
          children
        )}
      </div>
    </Button>
  );
}

export default LoadingButton;
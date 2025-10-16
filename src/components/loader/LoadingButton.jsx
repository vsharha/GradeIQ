import BlockLoader from "@/components/loader/BlockLoader";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

function LoadingButton({ isLoading, children, type, loadingMessages: customMessages, ...props }) {
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

    const totalUnique = Math.min(5, messages.length);

    const indices = messages.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const selected = indices.slice(0, totalUnique);

    let pos = 0;
    setLoadingMessage(messages[selected[pos]]);

    const randomDelay = () => 2000 + Math.floor(Math.random() * 2001);

    let timer = null;

    const showNext = () => {
      pos += 1;
      if (pos >= selected.length) {
        return;
      }
      setLoadingMessage(messages[selected[pos]]);
      timer = setTimeout(showNext, randomDelay());
    };

    if (selected.length > 1) {
      timer = setTimeout(showNext, randomDelay());
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, messages, type]);

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
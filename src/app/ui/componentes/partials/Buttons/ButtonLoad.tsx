"use client";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Loader2, ChevronsDown } from "lucide-react";

interface ButtonLoadProps {
  onScrollToBottom: () => void;
  isLoadingMore: boolean;
}

export function ButtonLoad({
  onScrollToBottom,
  isLoadingMore,
}: ButtonLoadProps) {
  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        onScrollToBottom();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollToBottom]);

  return (
    <Button
      colorScheme="cyan"
      borderRadius="full"
      position="fixed"
      bottom="30px"
      isDisabled={isLoadingMore}
      role="button"
    >
      <p className="text-white uppercase text-xs tracking-widest">
        {isLoadingMore ? (
          <span className="flex items-center gap-1">
           <Loader2 height={18} className="animate-spin" />
          </span>
        ) : (
          <>
            <span className="flex items-center gap-1 ">
               Scroll <ChevronsDown height={18} data-testid="iconBtn" className="animate-bounce transform -translate-x-4" />
            </span>
          </>
        )}
      </p>
    </Button>
  );
}

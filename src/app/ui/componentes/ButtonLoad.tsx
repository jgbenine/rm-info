
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Plus } from "lucide-react";
// import { useContextData } from "../../data/hooks/useContextData";

export function ButtonLoad() {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  // const { handleLoadMore } = ();

  // function handleBtn() {
  //   try {
  //     handleLoadMore();
  //     setIsLoadingMore(true);
  //     setTimeout(() => {
  //       setIsLoadingMore(false); 
  //     }, 1000); 
  //   } catch (error) {
  //     console.error("Error loading more data:", error);
  //   }
  // }

  return (
    <Button
      colorScheme="cyan"
      borderRadius="full"
      position="fixed"
      bottom="30px"
      isDisabled={isLoadingMore}
      role="button"
    >
      <p className="text-white">{isLoadingMore ? "Loading.." : <Plus data-testid="iconBtn" />}</p>
    </Button>
  );
}

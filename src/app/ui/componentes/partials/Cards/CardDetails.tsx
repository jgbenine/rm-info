import { Badge, Text } from "@chakra-ui/react";

interface DetailsCardProps {
  content: string;
  labelInfo: string;
}

export function CardDetails(props: DetailsCardProps) {
  return (
    <div className="flex gap-2 items-center max-w-full">
      <Badge fontSize={11} colorScheme="cyan">
        {props.labelInfo}
      </Badge>
      <Text
        fontSize={13}
        textAlign="center"
        fontWeight="normal"
        className="truncate"
      >
        {props.content}
      </Text>
    </div>
  );
}

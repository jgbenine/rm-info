import { Badge, Text } from '@chakra-ui/react'
import React from 'react'

interface TextView{
  infoText?: string;
  labelBadge: string;
  colorBadge: string;
}

export function DetailsInfo(props: TextView) {
  return (
    <Text
    display="flex"
    gap="3px"
    pb="5px"
    flexDirection="column"
    fontSize="15px"
    fontWeight="600"
    fontStyle="15px"
    borderBottom="1px solid #e3e3e3"
  >
    <Badge
      fontSize={12}
      colorScheme={props.colorBadge}
      maxWidth="150px"
      className='font-syne tracking-widest'
    >
      {props.labelBadge}
    </Badge>
    {props.infoText}
  </Text>
  )
}

'use client';
import { Card, CardBody, Box, Text, useDisclosure } from "@chakra-ui/react";
import { CardDetails } from "./CardDetails";
import { DetailsView } from "../Modal/DetailsView";
import { useState } from "react";
import Image from "next/image";

interface cardProps {
  id: number;
  avatar: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}

export function CardView({
  id,
  avatar,
  name,
  gender,
  status,
  species,
}: cardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idCharacter, setIdCharacter] = useState<any>();

  function getDetails(id: number) {
    if(id){
      onOpen();
      setIdCharacter(id);
    }
  }

  return (
    <>
      {idCharacter !== null && idCharacter !== undefined ? (
        <DetailsView isOpen={isOpen} onClose={onClose} id={idCharacter} />
      ) : null}
      <Card
        p="20px"
        w="250px"
        h="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        cursor="pointer"
        borderRadius="3xl"
        border="1px solid transparent"
        className="font-montserrat hover:transition-all duration-75 animaLeft"
        onClick={() => getDetails(id)}
        _hover={{ border: "3px solid #00b5cc" }}
      >
        <Image
          src={avatar}
          alt="avatar"
          width={105}
          height={105}
          className="rounded-full"
        />
        <CardBody>
          <Text fontSize={16} textAlign="center" fontWeight="bold">
            {name}
          </Text>
          <Box display="flex" gap={1} flexDirection="column" paddingTop={2}>
            <CardDetails labelInfo="Specie" content={species} />
            <CardDetails labelInfo="Gender" content={gender} />
            <CardDetails labelInfo="Status" content={status} />
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

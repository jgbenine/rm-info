import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { DetailsInfo } from "./DetailsInfo";
import { fetchDetailCharacter } from "@/app/data/api/axiosConfig";
import { useQuery } from "react-query";

interface ModalViewContentProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

export function DetailsView(propsModal: ModalViewContentProps) {
  const { data, isLoading } = useQuery(
    ['detailCharacter', propsModal.id], // Chave de consulta dinâmica com o ID do personagem
    () => fetchDetailCharacter(propsModal.id)
  );

  return (
    <>
      {!isLoading && (
        <Modal
          isOpen={propsModal.isOpen}
          onClose={propsModal.onClose}
          size="sm"
          scrollBehavior="inside"
        >
          <ModalContent
            position="absolute"
            right={0}
            top="80px"
            // height="full"
            boxShadow="2xl"
            borderRadius="lg"
            className="border-[3px] border-rmBlue"
          >
            <ModalHeader>
              <ModalCloseButton right="3" />
            </ModalHeader>
            <ModalBody>
              <Box display="flex" flexDirection="column" gap="20px" p="10px">
                <div className="flex flex-col gap-2">
                  <Text
                    display="flex"
                    gap="5px"
                    alignItems="center"
                    textTransform="uppercase"
                    fontWeight="500"
                  >
                    {data?.name}
                  </Text>
                  <Image
                    src={data?.image}
                    boxSize="200px"
                    boxShadow="lg"
                    borderRadius={"2xl"}
                    height="200px"
                    alt="photo character"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <DetailsInfo
                    labelBadge="Specie"
                    infoText={data?.species}
                    colorBadge="purple"
                  />
                  <DetailsInfo
                    labelBadge="Gender"
                    infoText={data?.gender}
                    colorBadge="green"
                  />
                  <DetailsInfo
                    labelBadge="Location"
                    infoText={data?.location?.name}
                    colorBadge="purple"
                  />
                  <DetailsInfo
                    labelBadge="Origin"
                    infoText={data?.origin?.name}
                    colorBadge="green"
                  />
                  {data.type ? (
                    <DetailsInfo
                      labelBadge="Type"
                      infoText={data?.type}
                      colorBadge="purple"
                    />
                  ) : null}
                  <DetailsInfo
                    labelBadge="Status"
                    infoText={data?.status}
                    colorBadge="yellow"
                  />
                </div>
              </Box>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

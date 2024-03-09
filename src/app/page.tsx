import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardView } from "./ui/componentes/partials/CardView";
import { Loading } from "./ui/componentes/Loading";
import { ButtonLoad } from "./ui/componentes/ButtonLoad";
import { Header } from "./ui/componentes/partials/Header";
import { fetchCharacterDataByPage } from "./data/api/axiosConfig";

export default async  function Home() {
  const { results: dataCharactersForPage } = await fetchCharacterDataByPage(1);

  return (
    <ChakraProvider>
      <Header />
      <main className="py-10 min-h-screen items-center w-full">
        <div>
          <Box
            pt="6rem"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="35px"
            // maxW="1120px"
            w="full"
            position="relative"
            margin="auto"
            className="containerMain"
          >
            <>
              {dataCharactersForPage?.map((element: any, index: number) => (
                <CardView
                  key={index}
                  id={element?.id}
                  name={element?.name}
                  avatar={element?.image}
                  species={element?.species}
                  gender={element?.gender}
                  status={element?.status}
                />
              ))}
            </>
            {/* <ButtonLoad /> */}
          </Box>
        </div>
      </main>
    </ChakraProvider>
  );
}

import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Link, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import Logo from "@/comps/Logo";
import { useSignInMutation } from "@psh/schema/dist/generated/operations";
import { StatusCodes } from "http-status-codes";

interface IProp {

}

const App = (props: IProp) => {
    const toast = useToast();
    const { handleSubmit, errors, register, formState } = useForm();
    const [signIn, result] = useSignInMutation();
    const onSubmit = async (values: any) => {
        console.log(values);
        try {
            const result = await signIn({
                variables: {
                    params: {
                        email: values.email,
                        password: values.password
                    }
                }
            });
            if (result.data?.signInUser) {
                const session = result.data?.signInUser;
                localStorage.setItem("access-token", session.access_token);
                location.replace("/");
            }
        } catch(e: any) {
            for (const errors of e.graphQLErrors) {
                if (errors.extensions.code == StatusCodes.UNAUTHORIZED) {
                    toast({
                        title: "이메일 또는 비밀번호가 틀렸습니다",
                        status: "error",
                        duration: 3000,
                        isClosable: true
                    });
                } else {
                    toast({
                        title: "로그인 중 문제가 발생했습니다",
                        status: "error",
                        duration: 3000,
                        isClosable: true
                    });
                }
            }
            console.error(e.message);
        }
    }
    return <Box bg="gray.50" height="100vh">
        <Box w={300} mx="auto" px="1em">
            <Box py={10}>
                <Logo />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl isInvalid={errors.email} isRequired>
                    <Input
                        name="email"
                        placeholder="이메일"
                        bg="white"
                        ref={register({
                            required: true
                        })}/>
                </FormControl>
                <FormControl isInvalid={errors.password} isRequired>
                    <Input
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        bg="white"
                        ref={register({
                            required: true
                        })}/>
                </FormControl>
                <Button
                    mt={4}
                    w="100%"
                    colorScheme="blue"
                    isLoading={formState.isSubmitting}
                    type="submit"
                    fontWeight="normal">
                    로그인
                </Button>
            </form>
            <Box textAlign="center" fontSize="0.9em" color="gray.600" my={3}>
                <Link display="inline-display" mx={5}>비밀번호 재설정</Link>
                <Link display="inline-display" mx={5} href="/users/new">회원가입</Link>
            </Box>
        </Box>
    </Box>;
}

export default App;
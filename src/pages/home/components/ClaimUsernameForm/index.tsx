import { z } from 'zod'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnotation } from './styes'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput, Button, Text } from '@ignite-ui/react'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Usuário deve ter no mínimo 3 caracteres.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Usuário só pode ter letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    router.push(`/register?username=${username}`)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="lins.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>

        <FormAnotation>
          <Text size="sm">
            {errors.username
              ? errors.username?.message
              : 'Digite o do usuário desejado.'}
          </Text>
        </FormAnotation>
      </Form>
    </>
  )
}

import tw, {css, styled, theme} from 'twin.macro'


const Input = styled.input(() => {
  return [
    tw`px-8 py-2 duration-75 transform border-2 rounded focus:outline-none`,,
    tw`hocus:(scale-105 text-blue-400 border-indigo-300)`,
    css`
      color: ${theme`colors.blue`};
    `,
  ]
})

export default Input
import Title from '../../core/components/Typography/Title';
import Text from '../../core/components/Typography/Text';

function Article(props: { title: string; text: string }) {
  return (
    <div>
      <Title> {props.title} </Title>
      <Text> {props.text}  </Text>
    </div>
  )
}

export default Article;
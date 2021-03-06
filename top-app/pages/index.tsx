import { useState } from 'react';
import { Button, Htag, Paragraph, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Htag tag='h1'>Заголовок</Htag>
        <Button appearance='primary' arrow="right">Кнопка</Button>
        <Button appearance='ghost' arrow="right">Кнопка</Button>
        <Paragraph>Параграф</Paragraph>
        <Tag size='s'>Ghost</Tag>
        <Tag size='m' color='red'>Red</Tag>
        <Tag size='s' color='green'>Green</Tag>
        <Tag color='primary'>Primary</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
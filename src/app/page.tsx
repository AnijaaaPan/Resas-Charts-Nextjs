import { CheckBoxField, HandleClickCheck } from '@/features/CheckBoxField';
import GetPrefectures from '@/getters/GetPrefectures';

export default async function Home() {
  const prefectures = await GetPrefectures();

  return (
    <main>
      <h2>都道府県</h2>
      {prefectures && <CheckBoxField prefectures={prefectures} onChange={HandleClickCheck} />}
    </main>
  );
}

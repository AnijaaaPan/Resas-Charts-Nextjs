import { CheckBox, HandleClick } from '@/features/CheckBox';
import GetPrefectures from '@/getters/GetPrefectures';

export default async function Home() {
  const prefectures = await GetPrefectures();

  return (
    <main>
      <h2>都道府県</h2>
      {prefectures && <CheckBox prefectures={prefectures} onChange={HandleClick} />}
    </main>
  );
}

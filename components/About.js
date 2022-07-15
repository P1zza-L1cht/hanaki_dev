export default function About() {
  return (
    <div className="md:flex items-center justify-center bg-green-100 pb-6">
      <div className="md:w-[50%] p-16 flex items-center justify-center">
        <img src="/images/mainvisual.jpg" alt="花木リン　ビジュアル" className="w-[80%]"/>
      </div>
      <div className="w-[80%] mx-auto md:w-[50%]">
        <h2 className="text-2xl font-bold mb-3">プロフィール</h2>
        <p>
          名前は、花木リン(はなき りん)です。<br/>
          花の王国　フラワーリン王国で育ったハナキリンの花から擬人化し、V-tuber and V-singerとして人間界で活動しています。<br/>
          <br/>
          風に飛ばされ空の上からゆらゆらと、いろんな人を見てたら人間界に興味持っちゃった!？<br/>
          この世界には色んな種族がいると聞いたから、色んなヒトタチ？と仲良くなれる為に配信中<br/>
          みんなの世界に笑顔を咲かせられるようにしていくよー❕Let{"'"}s こんりんわ！！
        </p>
        <ul className="mt-6">
          <li>性別: おしべから生まれたから男？</li>
          <li>年齢: 人間界の世界で２０歳ぐらい？ </li>
          <li>誕生日: ５月２１日</li>
          <li>身長: 161cm</li>
          <li>呼び名： リンリン、リンくん</li>
          <li>性格： 元気で活発！甘えたがりなり!みんなに甘やかされる弟的な存在。</li>
          <li>好きなこと: 寝ること、ゲームすること、喋ること、歌うこと、日光浴</li>
          <li>嫌いなもの: 辛い食べもの、淋しいこと</li>
          <li>ファンマーク: 💫🌺</li> 
        </ul>
      </div>
    </div>
  )
}

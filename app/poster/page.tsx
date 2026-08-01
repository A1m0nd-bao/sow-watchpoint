const products = [
  { name: "魔法雾子吧唧", price: "¥14", image: "magic-kiriko-badge.jpg", type: "吧唧" },
  { name: "雾子明信片", price: "¥8", image: "kiriko-postcard.jpg", type: "明信片" },
  { name: "土豆香片", price: "¥10", image: "potato-fragrance.png", type: "香片" },
  { name: "探奇拍立得小卡", price: "¥8", image: "venture-polaroid-standee.png", type: "小卡" },
  { name: "探奇亚克力立牌", price: "¥16", image: "venture-polaroid-standee.png", type: "立牌" },
  { name: "飞天猫光栅卡", price: "¥8", image: "flying-cat-lenticular.jpg", type: "光栅卡" },
  { name: "安燃冰箱贴", price: "¥12", image: "anran-magnet.jpg", type: "冰箱贴", note: "任选两个 ¥20" },
  { name: "无漾冰箱贴", price: "¥12", image: "wuyang-magnet.jpg", type: "冰箱贴", note: "任选两个 ¥20" },
];

export default function PosterPage() {
  return (
    <main className="poster-page">
      <img className="poster-background" src="../poster-background.png" alt="" />
      <div className="poster-shade" />

      <section className="poster-content" aria-label="AL的望望小铺价目海报">
        <header className="poster-header">
          <div>
            <p className="poster-kicker">SHANGHAI · TODAY & TOMORROW</p>
            <h1>AL的望望小铺</h1>
          </div>
          <div className="booth-stamp" aria-label="摊位号 A11">
            <span>BOOTH</span>
            <strong>A11</strong>
          </div>
        </header>

        <div className="poster-event">魔都守望先锋同好会 only 1.0 · 老友记</div>

        <div className="poster-body">
          <p className="poster-label">TODAY&apos;S MERCH</p>
          <div className="poster-gallery">
            {products.map((product) => (
              <article className="poster-product-card" key={product.name}>
                <div className="poster-product-art">
                  <img src={`../products/${product.image}`} alt={product.name} />
                </div>
                <div className="poster-product-meta">
                  <div>
                    <p>{product.type}</p>
                    <h2>{product.name}</h2>
                    {product.note && <small>{product.note}</small>}
                  </div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="poster-footer">
          <p>有无料 · 商品售完即止</p>
          <p>微信 / 支付宝</p>
        </footer>
      </section>
    </main>
  );
}

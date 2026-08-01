const priceGroups = [
  ["魔法雾子吧唧", "¥14", "magic-kiriko-badge.jpg"],
  ["雾子明信片", "¥8", "kiriko-postcard.jpg"],
  ["土豆香片", "¥10", "potato-fragrance.png"],
  ["探奇拍立得小卡", "¥8", "venture-polaroid-standee.png"],
  ["探奇亚克力立牌", "¥16", "venture-polaroid-standee.png"],
  ["飞天猫光栅卡", "¥8", "flying-cat-lenticular.jpg"],
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
          <div className="poster-prices">
            <p className="poster-label">PRICE LIST</p>
            <div className="poster-price-grid">
              {priceGroups.map(([name, price, image]) => (
                <div className="poster-price" key={name}>
                  <div className="poster-product-name">
                    <img src={`../products/${image}`} alt="" />
                    <span>{name}</span>
                  </div>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
            <div className="poster-magnet">
              <div className="poster-product-name">
                <div className="poster-magnet-thumbs" aria-hidden="true">
                  <img src="../products/anran-magnet.jpg" alt="" />
                  <img src="../products/wuyang-magnet.jpg" alt="" />
                </div>
                <span>安燃 / 无漾冰箱贴</span>
              </div>
              <strong>¥12 一个 <i /> ¥20 两个</strong>
            </div>
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

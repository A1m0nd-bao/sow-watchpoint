"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  price: string;
  tone: string;
  badge: string;
  desc: string;
  image: string;
};

const categories = ["全部", "吧唧", "明信片", "香片", "小卡", "立牌", "光栅卡", "冰箱贴"];

const products: Product[] = [
  {
    name: "魔法雾子吧唧",
    category: "吧唧",
    price: "¥14",
    tone: "pink",
    badge: "魔法雾子",
    desc: "甜亮魔法少女风，蓝粉高饱和配色，适合痛包中心位。",
    image: "products/magic-kiriko-badge.jpg",
  },
  {
    name: "雾子明信片",
    category: "明信片",
    price: "¥8",
    tone: "sky",
    badge: "明信片",
    desc: "蓝天白云下的雾子与狐灵，清爽治愈，适合收藏和互换。",
    image: "products/kiriko-postcard.jpg",
  },
  {
    name: "土豆香片",
    category: "香片",
    price: "¥10",
    tone: "gold",
    badge: "香片",
    desc: "很有记忆点的土豆造型香片，摊位小物区的快乐担当。",
    image: "products/potato-fragrance.png",
  },
  {
    name: "探奇拍立得小卡",
    category: "小卡",
    price: "¥8",
    tone: "olive",
    badge: "小卡",
    desc: "探奇 Q 版拍立得小卡，动作俏皮，适合随身收藏。",
    image: "products/venture-polaroid-standee.png",
  },
  {
    name: "探奇亚克力立牌",
    category: "立牌",
    price: "¥16",
    tone: "olive",
    badge: "立牌",
    desc: "探奇 Q 版立牌，适合桌面展示，可以和小卡一起收。",
    image: "products/venture-polaroid-standee.png",
  },
  {
    name: "飞天猫光栅卡",
    category: "光栅卡",
    price: "¥8",
    tone: "amber",
    badge: "光栅",
    desc: "飞天猫主题光栅卡，橙色暖调和星星元素很适合现场陈列。",
    image: "products/flying-cat-lenticular.jpg",
  },
  {
    name: "安燃冰箱贴",
    category: "冰箱贴",
    price: "¥12 / ¥20两个",
    tone: "orange",
    badge: "冰箱贴",
    desc: "火焰主题 Q 版冰箱贴，暖色系视觉强，适合成对摆放。",
    image: "products/anran-magnet.jpg",
  },
  {
    name: "无漾冰箱贴",
    category: "冰箱贴",
    price: "¥12 / ¥20两个",
    tone: "blue",
    badge: "冰箱贴",
    desc: "水流主题 Q 版冰箱贴，蓝色清透，与安燃款可以组成一对。",
    image: "products/wuyang-magnet.jpg",
  },
];

const deals = [
  "冰箱贴 ¥12 一个，¥20 两个",
  "探奇小卡 ¥8，探奇立牌 ¥16",
  "有无料，商品售完即止",
];

const paymentMethods = [
  {
    name: "微信支付",
    image: "payments/wechat-pay.jpg",
    note: "推荐使用微信支付",
  },
  {
    name: "支付宝",
    image: "payments/alipay.jpg",
    note: "也可以使用支付宝",
  },
];

export default function Home() {
  const [active, setActive] = useState("全部");

  const visibleProducts = useMemo(() => {
    if (active === "全部") return products;
    return products.filter((product) => product.category === active);
  }, [active]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080912] text-white">
      <section className="hero-shell">
        <div className="hero-light hero-light-a" />
        <div className="hero-light hero-light-b" />
        <nav className="topbar" aria-label="摊位导航">
          <a className="brand-mark" href="#top" aria-label="返回顶部">
            AL
          </a>
          <div className="topbar-links">
            <a href="#products">商品</a>
            <a href="#prices">提示</a>
            <a href="#payment">付款</a>
            <a href="#visit">现场</a>
            <a href="poster">海报</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Overwatch Fan Booth</p>
            <h1>AL的望望小铺</h1>
            <p className="hero-subtitle">
              守望先锋主题同人小铺。这里放着今日带来的吧唧、明信片、香片、小卡立牌、光栅卡和冰箱贴，扫码就能快速看图挑款。
            </p>
            <div className="hero-actions" aria-label="快捷入口">
              <a className="primary-action" href="#products">
                看商品图
              </a>
              <a className="secondary-action" href="#visit">
                看摊位信息
              </a>
              <a className="secondary-action" href="poster">
                全屏价目海报
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="AL的望望小铺商品主视觉">
            <img
              className="hero-feature"
              src="og.png"
              alt="AL的望望小铺首页氛围展示图"
            />
            <div className="scan-card">
              <span>摊位名</span>
              <strong>AL的望望小铺</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="content-band">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Merch Gallery</p>
            <h2>今日商品图鉴</h2>
          </div>
          <p className="section-note">价格已按当前价目表更新，全部商品可现场看图挑选。</p>
        </div>

        <div className="filter-row" aria-label="商品分类筛选">
          {categories.map((category) => (
            <button
              className={active === category ? "filter active" : "filter"}
              key={category}
              onClick={() => setActive(category)}
              type="button"
            >
              <span />
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className={`product-card tone-${product.tone}`} key={product.name}>
              <div className="product-art">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <span className="product-badge">{product.badge}</span>
              </div>
              <p className="product-desc">{product.desc}</p>
              <div className="price-row">
                <strong>{product.price}</strong>
                <span>现场可购</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="prices" className="deal-band">
        <div className="deal-copy">
          <p className="eyebrow">Booth Notes</p>
          <h2>购买提示</h2>
          <p>
            有无料，商品售完即止。现场付款前请先确认商品与金额；也可以打开全屏价目海报给同行伙伴一起看。
          </p>
        </div>
        <div className="deal-list">
          {deals.map((deal, index) => (
            <div className="deal-item" key={deal}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{deal}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="payment" className="payment-band">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Payment</p>
            <h2>付款方式</h2>
          </div>
          <p className="section-note">第一个为微信支付，第二个为支付宝。现场付款时请确认金额后再扫码。</p>
        </div>

        <div className="payment-grid">
          {paymentMethods.map((method) => (
            <article className="payment-card" key={method.name}>
              <div>
                <p>{method.note}</p>
                <h3>{method.name}</h3>
              </div>
              <img src={method.image} alt={`${method.name}收款码`} />
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-band">
        <div>
          <p className="eyebrow">Booth Info</p>
          <h2>现场信息</h2>
        </div>
        <div className="visit-grid">
          <div>
            <span>摊位名称</span>
            <strong>AL的望望小铺</strong>
          </div>
          <div>
            <span>摊位号</span>
            <strong>A11</strong>
          </div>
          <div>
            <span>展会</span>
            <strong>魔都守望先锋同好会 only 1.0·老友记</strong>
          </div>
          <div>
            <span>地点与日期</span>
            <strong>上海 · 今日与明日</strong>
          </div>
          <div>
            <span>现场提示</span>
            <strong>有无料 · 售完即止</strong>
          </div>
          <div>
            <span>支付方式</span>
            <strong>微信 / 支付宝</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

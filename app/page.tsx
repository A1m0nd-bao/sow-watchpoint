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

const categories = ["全部", "吧唧", "明信片", "香片", "小卡/立牌", "光栅卡", "冰箱贴"];

const products: Product[] = [
  {
    name: "魔法雾子吧唧",
    category: "吧唧",
    price: "¥待补",
    tone: "pink",
    badge: "魔法雾子",
    desc: "甜亮魔法少女风，蓝粉高饱和配色，适合痛包中心位。",
    image: "products/magic-kiriko-badge.jpg",
  },
  {
    name: "雾子明信片",
    category: "明信片",
    price: "¥待补",
    tone: "sky",
    badge: "明信片",
    desc: "蓝天白云下的雾子与狐灵，清爽治愈，适合收藏和互换。",
    image: "products/kiriko-postcard.jpg",
  },
  {
    name: "土豆香片",
    category: "香片",
    price: "¥待补",
    tone: "gold",
    badge: "香片",
    desc: "很有记忆点的土豆造型香片，摊位小物区的快乐担当。",
    image: "products/potato-fragrance.png",
  },
  {
    name: "探奇拍立得小卡和立牌",
    category: "小卡/立牌",
    price: "¥待补",
    tone: "olive",
    badge: "组合",
    desc: "探奇 Q 版小卡与立牌，动作俏皮，适合桌面展示。",
    image: "products/venture-polaroid-standee.png",
  },
  {
    name: "飞天猫光栅卡",
    category: "光栅卡",
    price: "¥待补",
    tone: "amber",
    badge: "光栅",
    desc: "飞天猫主题光栅卡，橙色暖调和星星元素很适合现场陈列。",
    image: "products/flying-cat-lenticular.jpg",
  },
  {
    name: "安燃冰箱贴",
    category: "冰箱贴",
    price: "¥待补",
    tone: "orange",
    badge: "冰箱贴",
    desc: "火焰主题 Q 版冰箱贴，暖色系视觉强，适合成对摆放。",
    image: "products/anran-magnet.jpg",
  },
  {
    name: "无漾冰箱贴",
    category: "冰箱贴",
    price: "¥待补",
    tone: "blue",
    badge: "冰箱贴",
    desc: "水流主题 Q 版冰箱贴，蓝色清透，与安燃款可以组成一对。",
    image: "products/wuyang-magnet.jpg",
  },
];

const deals = [
  "价格与余量以现场摊位牌为准",
  "冰箱贴可成对陈列购买",
  "欢迎现场看样后再决定",
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
            <a href="#visit">现场</a>
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
          <p className="section-note">价格先留占位，后续可按你的价目表一键替换。</p>
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
            当前版本已经换成真实商品图。价格、摊位号、限购规则和无料说明还可以继续按现场信息补齐。
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
            <strong>待补</strong>
          </div>
          <div>
            <span>支付方式</span>
            <strong>扫码 / 现金待补</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

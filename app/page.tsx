"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  price: string;
  tone: string;
  badge: string;
  desc: string;
};

const categories = ["全部", "立牌", "色纸", "徽章", "贴纸", "套组"];

const products: Product[] = [
  {
    name: "默认商品 A",
    category: "立牌",
    price: "¥45",
    tone: "cyan",
    badge: "热卖",
    desc: "双面亚克力，通透高亮，适合现场快速入手。",
  },
  {
    name: "默认商品 B",
    category: "色纸",
    price: "¥30",
    tone: "coral",
    badge: "新款",
    desc: "高饱和印刷，适合签绘、收藏和合影展示。",
  },
  {
    name: "默认商品 C",
    category: "徽章",
    price: "¥18",
    tone: "violet",
    badge: "单品",
    desc: "亮膜圆徽章，背包、痛包、挂布都很搭。",
  },
  {
    name: "默认商品 D",
    category: "贴纸",
    price: "¥12",
    tone: "mint",
    badge: "小物",
    desc: "异形切割贴纸，手账、手机壳、票夹都能贴。",
  },
  {
    name: "默认商品 E",
    category: "套组",
    price: "¥88",
    tone: "amber",
    badge: "划算",
    desc: "立牌、徽章、贴纸组合装，适合一次收齐。",
  },
  {
    name: "默认商品 F",
    category: "色纸",
    price: "¥36",
    tone: "blue",
    badge: "限定",
    desc: "现场限定版本，数量有限，展示位醒目。",
  },
];

const deals = [
  "任意贴纸 3 张 ¥30",
  "徽章 2 个 ¥32",
  "套组购买送默认小卡",
];

export default function Home() {
  const [active, setActive] = useState("全部");

  const visibleProducts = useMemo(() => {
    if (active === "全部") return products;
    return products.filter((product) => product.category === active);
  }, [active]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080d] text-white">
      <section className="hero-shell">
        <div className="hero-light hero-light-a" />
        <div className="hero-light hero-light-b" />
        <nav className="topbar" aria-label="摊位导航">
          <a className="brand-mark" href="#top" aria-label="返回顶部">
            BSM
          </a>
          <div className="topbar-links">
            <a href="#products">商品</a>
            <a href="#prices">优惠</a>
            <a href="#visit">现场</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Today at Comic Market</p>
            <h1>Booth Spark Market</h1>
            <p className="hero-subtitle">
              今日漫展摊位商品展示页。价格、样式和优惠都集中在这里，扫码后可以快速浏览、对照和下单。
            </p>
            <div className="hero-actions" aria-label="快捷入口">
              <a className="primary-action" href="#products">
                看商品
              </a>
              <a className="secondary-action" href="#prices">
                看优惠
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="摊位商品主视觉">
            <img src="/og.png" alt="Booth Spark Market 摊位商品展示" />
            <div className="scan-card">
              <span>摊位号</span>
              <strong>默认占位</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Merch Menu</p>
          <h2>商品样式与价格</h2>
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
              <div className="product-art" aria-hidden="true">
                <div className="art-plate" />
                <div className="art-chip chip-one" />
                <div className="art-chip chip-two" />
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
          <p className="eyebrow">Today Deals</p>
          <h2>今日优惠</h2>
          <p>
            这里先放默认活动文案。你可以把真实满减、套装价、限量规则替换进来，现场扫码时会比纸质价目表更清楚。
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
            <strong>Booth Spark Market</strong>
          </div>
          <div>
            <span>摊位号</span>
            <strong>默认占位</strong>
          </div>
          <div>
            <span>支付方式</span>
            <strong>默认占位</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

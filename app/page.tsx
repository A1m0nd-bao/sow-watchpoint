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

const categories = ["全部", "立牌", "色纸", "挂件", "贴纸", "套组"];

const products: Product[] = [
  {
    name: "英雄小队亚克力立牌",
    category: "立牌",
    price: "¥48",
    tone: "orange",
    badge: "热卖",
    desc: "未来战场风双面亚克力，适合桌面阵容展示。",
  },
  {
    name: "推车地图纪念色纸",
    category: "色纸",
    price: "¥35",
    tone: "sky",
    badge: "新款",
    desc: "城市战场氛围插画，高饱和印刷，现场很出片。",
  },
  {
    name: "职责图标金属挂件",
    category: "挂件",
    price: "¥28",
    tone: "white",
    badge: "单品",
    desc: "坦克、输出、支援三类灵感挂件，痛包搭配很利落。",
  },
  {
    name: "补给箱贴纸包",
    category: "贴纸",
    price: "¥15",
    tone: "blue",
    badge: "小物",
    desc: "异形切割贴纸，包含光效、弹痕、语音气泡等元素。",
  },
  {
    name: "Watchpoint 入队套组",
    category: "套组",
    price: "¥98",
    tone: "orange",
    badge: "划算",
    desc: "立牌、挂件、贴纸组合装，一次收齐今日主推阵容。",
  },
  {
    name: "支援位限定色纸",
    category: "色纸",
    price: "¥38",
    tone: "gold",
    badge: "限定",
    desc: "偏治疗光效和白金装甲氛围，数量有限，售完即止。",
  },
];

const deals = [
  "贴纸包 3 份 ¥40",
  "挂件 2 个 ¥50",
  "入队套组送补给箱小卡",
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
            SOW
          </a>
          <div className="topbar-links">
            <a href="#products">商品</a>
            <a href="#prices">优惠</a>
            <a href="#visit">现场</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Overwatch Fan Booth</p>
            <h1>SOW Watchpoint</h1>
            <p className="hero-subtitle">
              守望先锋主题同人摊商品展示页。立牌、色纸、挂件、贴纸和今日优惠都放在这里，扫码后可以快速浏览并对照价格。
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

          <div className="hero-visual" aria-label="守望先锋主题摊位商品主视觉">
            <img src="/og.png" alt="SOW Watchpoint 守望先锋主题同人摊商品展示" />
            <div className="scan-card">
              <span>摊位号</span>
              <strong>默认占位</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Payload Merch Menu</p>
          <h2>今日补给清单</h2>
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
                <div className="art-plate">
                  <span />
                </div>
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
          <p className="eyebrow">Mission Bonus</p>
          <h2>今日任务奖励</h2>
          <p>
            这里先用守望先锋主题的占位活动。后面可以换成你的真实满减、套装价、限量规则和无料领取条件。
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
          <p className="eyebrow">Rally Point</p>
          <h2>集合点信息</h2>
        </div>
        <div className="visit-grid">
          <div>
            <span>摊位名称</span>
            <strong>SOW Watchpoint</strong>
          </div>
          <div>
            <span>摊位号</span>
            <strong>默认占位</strong>
          </div>
          <div>
            <span>支付方式</span>
            <strong>扫码 / 现金占位</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import VisitSiteBtn from "./visitSiteBtn";
export default function ArticleBoard({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ArticleBoard"}>
      <div className={"title"}>综述：拜登再次为美国撤军辩护 喀布尔机场外情况“可怕又困难”</div>
      <div className={"meta"}>路透社 | by Biden | 2021/8/22</div>
      <div className={"content"}>路透新闻部

        2 分钟阅读

        路透喀布尔/华盛顿8月20日 - 在有报导称塔利班实施报复后，西方国家周五努力加快从阿富汗撤离的步伐，而美国总统拜登则坚持认为，美国撤军后的混乱局面并没有削弱华盛顿的国际信誉。

        2021年8月20日，美国华盛顿，拜登在白宫发表讲话。REUTERS/Ken Cedeno
        面对国内外对他撤军和随后塔利班迅速接管的批评，拜登说每个想撤离的美国人都会被撤离，自7月以来已有约18,000人空运撤离。

        “我没有看到我们的盟友对我们的信誉提出质疑，”拜登在白宫发表讲话后对记者说。“...我没有看到这一点。事实上，我得到的情况完全相反...我们正在迅速采取行动，我们正在采取行动，致力于我们所说的我们会做的事。”

        周五在美国当局寻找愿意接受逃离阿富汗的人的国家时，美国从喀布尔机场撤离的航班停止了六个多小时，但在当天晚些时候恢复。

        北大西洋公约组织(NATO)秘局势的拉布辩护。

        德国周五表示，正在派遣直升机提供</div>
      <VisitSiteBtn/>
    </div>
  )
}

import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function ArticleItem({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ArticleItem"}>
      <div className={"title"}>综述：拜登再次为美国撤军辩护 喀布尔机场外情况“可怕又困难</div>
      <div className={"meta"}>路透社 | by Biden | 2021/8/22</div>
      <div className={"content"}>路透新闻部 2 分钟阅读 路透喀布尔/华盛顿8月20日 - 在有报导称塔利班实施报复后，西方国家周五努力加快从阿富汗撤离的步伐，而美国总统拜登则坚持认为，美国撤军后的混乱局面并没有削弱华盛顿的国际信誉。 2021年8月20日，美国华盛顿，拜登在白宫发表讲话。REUTERS/Ken Cedeno 面对国内外对他撤军和随后塔利班迅速接管的批评，拜登说每个想撤离的美国人都会被撤离，自7月以来已有约</div>
    </div>
  )
}

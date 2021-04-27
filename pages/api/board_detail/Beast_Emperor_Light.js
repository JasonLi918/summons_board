export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2598',
  			'Image':'https://imgur.com/GdBneVF.jpg',
  			'Name_tc':'機皇帝',
  			'Name_jp':'機艦帝獣・ゾンバルディエ',
  			'hp':'18900',
  			'Atk_before':'310x3(4)回',
  			'Atk_after':'381x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','輔助type'],
  			'Characteristic_Before':['全體化','對空攻擊 Lv1'],
  			'Characteristic_After':['全體化','對空攻擊 Lv1','技能盾 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'指向共嗚柱(斜列)',
  			'Comment':"<p>二代光限定，初登場時以廣範圍組隊及高攻防倍率為其賣點，但隨著時代的發展，攻擊倍率大幅落後，現在以隊員身份作支援為主。</p><p>覺醒前主動技能為敵方全體固傷炮及設置回復陷阱格，固傷炮只有在特定情況下才有奇效，陷阱格則由於只回復單體，對整個隊伍的回復層面來說效果不太理想。覺醒後主動技能為蓄力防護貫通炮，範圍大並且倍率高，在不會觸發王反制技的情況下應該還算實用。</p><p>比較尷尬的點大概就是覺醒特性是指向共嗚柱，覺醒後的炮擊無法得到加成，並且有機會劣化同隊伍中的覺醒效果。整體來說就是覺醒前不大行，覺醒後主動技能雖然可以，但覺醒特性的扣分點太大，導致能上場的機會大減。</p>"
  		}
  	)
}
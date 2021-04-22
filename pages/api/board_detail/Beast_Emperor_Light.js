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
  			'Comment':"二代光限"
  		}
  	)
}
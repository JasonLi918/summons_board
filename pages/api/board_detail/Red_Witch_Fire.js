export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2865',
  			'Image':'https://imgur.com/nezPkYQ.jpg',
  			'Name_tc':'紅巫女',
  			'Name_jp':'ミリアム・ザ・クリムゾンウェッジ',
  			'hp':'12699',
  			'Atk_before':'319x3(4)回',
  			'Atk_after':'425x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','輔助type'],
  			'Characteristic_Before':['貫通 Lv3'],
  			'Characteristic_After':['貫通 Lv3','技能盾 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"紅巫女"
  		}
  	)
}
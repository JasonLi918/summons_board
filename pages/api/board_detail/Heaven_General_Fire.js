export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3796',
  			'Image':'https://imgur.com/9o5Mwz2.jpg',
  			'Name_tc':'火天將',
  			'Name_jp':'火月天将『朱雀』火雅裏',
  			'hp':'16955',
  			'Atk_before':'387x3(4)回',
  			'Atk_after':'424x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['貫通 Lv3','對地攻擊 Lv1'],
  			'Characteristic_After':['貫通 Lv3','高速移動 Lv2','對地攻擊 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"火天將"
  		}
  	)
}
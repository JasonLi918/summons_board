export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3769',
  			'Image':'https://imgur.com/kKugnEa.jpg',
  			'Name_tc':'水天星',
  			'Name_jp':'蒼天星神獣メルクーア',
  			'hp':'13706',
  			'Atk_before':'448x3(4)回',
  			'Atk_after':'525x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['飛行','貫通 Lv3'],
  			'Characteristic_After':['飛行','貫通 Lv3','對地攻擊 Lv2'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'攻擊回數增加(+3)',
  			'Comment':"水天星"
  		}
  	)
}
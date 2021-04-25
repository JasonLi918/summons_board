export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3778',
  			'Image':'https://imgur.com/UJAwLJ9.jpg',
  			'Name_tc':'光天將',
  			'Name_jp':'雷月天将『天空』雷童',
  			'hp':'21586',
  			'Atk_before':'295x3(4)回',
  			'Atk_after':'333x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','防禦type'],
  			'Characteristic_Before':['對地攻擊 Lv1','物理盾 Lv1'],
  			'Characteristic_After':['對地攻擊 Lv1','攻擊吸收 Lv2','物理盾 Lv1'],
  			'Tp_Transform':'20',
  			'Tp_Characteristic':'技能加速',
  			'Comment':"光天將"
  		}
  	)
}
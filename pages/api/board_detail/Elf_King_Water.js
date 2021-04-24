export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2840',
  			'Image':'https://i.imgur.com/qCgukee.jpg',
  			'Name_tc':'水精靈王',
  			'Name_jp':'水精霊王ゼイリオン',
  			'hp':'20669',
  			'Atk_before':'176x3(4)回',
  			'Atk_after':'261x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','反擊type'],
  			'Characteristic_Before':['攻擊吸收 Lv1','陷阱解除 Lv1'],
  			'Characteristic_After':['攻擊吸收 Lv1','陷阱解除 Lv1','水屬性傷害輕減 Lv1'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"水精靈王"
  		}
  	)
}
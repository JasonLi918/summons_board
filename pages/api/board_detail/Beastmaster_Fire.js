export default function handler(req, res) {
  res.status(200).json(
  		{
  			'full_name':'Full Name',
  			'short_name':'Short Name',
  			'image_A':'123',
  			'image_B':'456',
  		}
  	)
}
//For scene two - check package v2.01

var character : Transform; //main character
var bullet : Transform; // the bullet prefab
var spawnPt : GameObject; // holds the spawn point object
var Camchild : Camera;

var direction : Vector3;
var force : float;

var hello : String;

function Update(){   

	
  if (Input.GetButtonDown ("Fire1")) 
  {
        var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                  
        var hit : RaycastHit;
        
        if (Physics.Raycast (ray, hit))
  		{
        var Bullet2 = Instantiate (bullet, spawnPt.transform.position, spawnPt.transform.rotation);
        Bullet2.rigidbody.velocity = Camchild.transform.TransformDirection(Vector3.forward) * force  ;
        }
       }
        
  }
  
  //whippy kai ye mutherfucker
  
  
  /*
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 100)){
      Debug.DrawLine (character.position, hit.point);
      var projectile = Instantiate(bullet, spawnPt.transform.position, Quaternion.identity); 
      // turn the projectile to hit.point
      projectile.transform.LookAt(hit.point); 
      // accelerate it
      projectile.rigidbody.velocity = projectile.transform.forward * 100;
    }
  }
}
*/


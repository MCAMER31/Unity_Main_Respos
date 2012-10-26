var go : GameObject;

function OnCollisionEnter(theCollision : Collision){
   if(theCollision.gameObject.tag=="floor") 
   {
     Destroy(go);
   }
}
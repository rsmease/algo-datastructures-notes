análysis de complejidad -- Binary Trees

Como se mencionaba antes, podemos atravesar un árbol recursivamente para obtener todos los datos usando los métodos _pre-order_, _in-order_ o _post-order_. La complejidad del tiempo aquí es O(n) porque visitamos cada nodo exactamente una vez. En el caso peor, es posible que la altura del árbol también sea N. Este significa que el nivel de recusión puede amontar a N. Por tanto, pensando en la pila del sistema operativa, la complejidad del espacio también sea O(n).

Considerándolo con cuidado, la complejidad puede ser diferente por razón de una implementación diferente. Es comparativamente fácil para atravesar recursivamente, pero cuando el árbol es demasadio grande, podemos acontecer un problema con desbordamiento de pila. Eso es uno de los razones princpales que nos lleva resolver este problem iterativamente.

Por la solución iterativa, la complejidad del tiempo es aparentemente lo mismo como el caso de recusión: O(n). La complejidad del espacio es también O(n), porque, en el caso peor, tendríamos todos los nodos en el stack. Hay algunas otras soluciones de la travesía iterativa que pueden reducir la complejidad del espacio a O(1).

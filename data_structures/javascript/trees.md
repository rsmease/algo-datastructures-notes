Analysis de Complexidad -- Binary Trees

Como se mencionaba antes, podemos traversar un _tree_ recursivamente para obtener todos los datos usando los métodos _pre-order_, _in-order_ o _post-order_. La complexidad del tiempo aquí es O(n) porque visitables cada nodo exactamente una vez. En el caso peor, es posible que la altura del _tree_ sea N también. Este significa que el nivel de recusión puede amontar a N en el caso peor. Por tanto, pensando en el _stack_ del sistema operativa, la complexidad del espacio también sería O(n).

Considerandolo con cuidado, la complexidad puede ser diference por razón de una implementation diferente. Es comparativamente fácil para traversar recursivamente, pero cuando el _tree_ es demasadio grade, podemos acontecer un problema con _stack overflow_. Eso es uno de los razones princpales que nos causa resolver este problem iterativamente.

Por la solución iterativa, la complexidad del tiempo es aparentement lo mismo como el caso de recusión—O(n). La complexidad del espacio es también O(n), porque, en el caso peor, tendríamos todos los nodos en el stack. Hay algunas otras solutionces para traveral iterativo que pueden reducir la complexidad del espacio a O(1).


# purify-ts-filter

Provides a filter function as an addition to the purify-ts libraries List functions.

Returns all elements which satisfy a predicate.
A more typesafe version of the already existing Array.prototype.filter
Can be partially applied.

```typescript
import { filter } from 'purify-ts/Array';

const isEven = (n: number) => n % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6];
const evens = filter(isEven, numbers); // Just([2, 4, 6])
```
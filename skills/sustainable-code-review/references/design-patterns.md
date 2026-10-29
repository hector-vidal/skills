# Design patterns: when they help

Recommend a pattern only when its problem is present in the code under review. Each entry says the symptom that calls
for it and the sign that it is overkill.

## Creational

| Pattern | Use when | Overkill when |
| --- | --- | --- |
| Factory Method | Code must create objects whose exact class is decided by subclasses or configuration | There is one concrete class and no plan for another |
| Abstract Factory | Code works with families of related objects that must match each other | There is a single family |
| Builder | A constructor has many optional parameters, or an object is assembled in steps | Two or three required parameters |
| Prototype | Objects must be copied without depending on their concrete classes | A plain copy constructor or value type works |
| Singleton | Exactly one shared instance is a real constraint (for example a process-wide resource) | It is only a convenient global; pass the dependency instead |

## Structural

| Pattern | Use when | Overkill when |
| --- | --- | --- |
| Adapter | An existing class has the right behavior but the wrong interface | You control both sides and can change the interface |
| Bridge | An abstraction and its implementation must vary independently along two axes | Only one axis varies |
| Composite | Clients must treat single items and groups of items the same way (trees) | The structure is flat |
| Decorator | Responsibilities must be added to objects at runtime and combined freely | A fixed set of variants; a subclass or a parameter is clearer |
| Facade | A complex subsystem needs a simple entry point for common use | The subsystem is already small |
| Flyweight | Huge numbers of similar objects exhaust memory and share most of their state | Memory is not a measured problem |
| Proxy | Access to an object needs control: lazy creation, caching, permission, remote calls | No access concern exists |

## Behavioral

| Pattern | Use when | Overkill when |
| --- | --- | --- |
| Chain of Responsibility | A request must pass through handlers whose order or set changes | One or two fixed checks |
| Command | Actions must be queued, logged, undone or passed around as values | Actions are only called directly |
| Iterator | A collection's traversal must be hidden or vary | The language's own iteration already covers it |
| Mediator | Many components talk to each other and the web of references is hard to change | Few components with simple links |
| Memento | State must be saved and restored without exposing internals (undo) | No undo or snapshot need |
| Observer | Several objects must react to another's changes without being hard-wired | One known listener; call it directly |
| State | Behavior depends on a state and large conditionals switch on it | Two states and one simple condition |
| Strategy | An algorithm must be swapped at runtime or chosen by configuration | One algorithm; a function parameter is enough |
| Template Method | Several algorithms share steps and differ in a few | Variation is better expressed by passing functions |
| Visitor | New operations must be added over a stable set of element types | The set of types changes often |

## General guidance

- Prefer the language feature over the pattern: first-class functions often replace Strategy, Command and Template
  Method; iterators and generators replace Iterator.
- A pattern adds indirection. The review must name the concrete change it makes cheaper.
- Patterns are named in the review so the reader can look them up, not to justify complexity.

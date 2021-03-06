---
id: "knex.knex.columnnamequerybuilder"
title: "Interface: ColumnNameQueryBuilder<TRecord, TResult>"
sidebar_label: "ColumnNameQueryBuilder"
hide_title: true
---

# Interface: ColumnNameQueryBuilder<TRecord, TResult\>

[knex](../modules/knex.md).[Knex](../modules/knex.knex-1.md).ColumnNameQueryBuilder

## Type parameters

Name | Default |
------ | ------ |
`TRecord` | *any* |
`TResult` | *unknown*[] |

## Hierarchy

* **ColumnNameQueryBuilder**

  ↳ [*Select*](knex.knex.select.md)

  ↳ [*Distinct*](knex.knex.distinct.md)

  ↳ [*GroupBy*](knex.knex.groupby.md)

## Callable

▸ **ColumnNameQueryBuilder**(`columnName`: ***): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, *ArrayIfAlready*<TResult, *DeferredKeySelection*<TRecord, *string*, *false*, {}, *false*, {}, *never*\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`columnName` | *** |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, *ArrayIfAlready*<TResult, *DeferredKeySelection*<TRecord, *string*, *false*, {}, *false*, {}, *never*\>\>\>

Defined in: node_modules/knex/types/index.d.ts:1428

▸ **ColumnNameQueryBuilder**<ColNameUT, TResult2\>(...`columnNames`: readonly ColNameUT[]): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`ColNameUT` | *string* \| *number* \| *symbol* | - |
`TResult2` | - | *AddAliases*<*AddKey*<*SetBase*<*UnwrapArrayMember*<TResult\\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\\>\\>, ColNameUT & *string*\\>, {}\\>[] |

#### Parameters:

Name | Type |
------ | ------ |
`...columnNames` | readonly ColNameUT[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1434

▸ **ColumnNameQueryBuilder**<ColNameUT, TResult2\>(`columnNames`: readonly ColNameUT[]): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`ColNameUT` | *string* \| *number* \| *symbol* | - |
`TResult2` | - | *AddAliases*<*AddKey*<*SetBase*<*UnwrapArrayMember*<TResult\\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\\>\\>, ColNameUT & *string*\\>, {}\\>[] |

#### Parameters:

Name | Type |
------ | ------ |
`columnNames` | readonly ColNameUT[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1445

▸ **ColumnNameQueryBuilder**<TResult2\>(...`columnNames`: readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[]): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
------ | ------ |
`TResult2` | *AddAliases*<*AddKey*<*SetBase*<*UnwrapArrayMember*<TResult\\>, *Partial*<*AnyOrUnknownToOther*<TRecord, {}\\>\\>\\>, keyof TRecord & *string*\\>, {}\\>[] |

#### Parameters:

Name | Type |
------ | ------ |
`...columnNames` | readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1456

▸ **ColumnNameQueryBuilder**<TResult2\>(`columnNames`: readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[]): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
------ | ------ |
`TResult2` | *AddAliases*<*AddKey*<*SetBase*<*UnwrapArrayMember*<TResult\\>, *Partial*<*AnyOrUnknownToOther*<TRecord, {}\\>\\>\\>, keyof TRecord & *string*\\>, {}\\>[] |

#### Parameters:

Name | Type |
------ | ------ |
`columnNames` | readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1468

import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author McKilla Gorilla
 */

// Fore undo redo items
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, OldValue, NewValue) {
        super();
        this.store = initStore;
        this.index = index;
        this.oldItemValue = OldValue;
        this.newItemValue = NewValue;
    }

    doTransaction() {
        this.store.updateItemName(this.index, this.newItemValue);
    }
    
    undoTransaction() {
        this.store.updateItemName(this.index, this.oldItemValue);
    }
}

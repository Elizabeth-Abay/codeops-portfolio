    export const initialCartState = { items: [] };

    export function cartReducer(state, action) {
        switch (action.type) {
            case 'ADD_ITEM': {
            const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingIndex > -1) {
                const updatedItems = [...state.items];
                updatedItems[existingIndex] = {
                ...updatedItems[existingIndex],
                quantity: updatedItems[existingIndex].quantity + 1,
                };
                return { ...state, items: updatedItems };
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
            }

            case 'REMOVE_ITEM': {
    const targetId = action.payload?.id ?? action.payload;
    const existingItem = state.items.find((item) => item.id === targetId);

    if (!existingItem) return state;

    // If more than 1 in cart, reduce quantity by 1
    if (existingItem.quantity > 1) {
        return {
        ...state,
        items: state.items.map((item) =>
            item.id === targetId ? { ...item, quantity: item.quantity - 1 } : item
        ),
        };
    }

    // If quantity is 1, filter item out of cart
    return {
        ...state,
        items: state.items.filter((item) => item.id !== targetId),
    };
    }
            case 'CLEAR':
            return { items: [] };

            default:
            return state;
        }
    }
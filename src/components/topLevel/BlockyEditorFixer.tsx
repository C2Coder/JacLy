import { FC, InputHTMLAttributes, useEffect } from "react";

function BlockyEditorFixer() {
    useEffect(() => {
        setInterval(() => {
            const elements = document.querySelectorAll('.blocklyFlyout');
            let both_none = true;
                const display_str = window.getComputedStyle(elements[1]).display
                if ( display_str !== 'none' ) {
                    both_none = false;
                }
                const target_elements = document.querySelectorAll('.blocklyScrollbarVertical.blocklyFlyoutScrollbar');
                target_elements.forEach(element => {
                    (element as HTMLElement).style.display = both_none ? 'none' : 'block';
                });
                
        }, 100);

    }, []);

    return (
        <>
        </>
    );
}

export default BlockyEditorFixer;
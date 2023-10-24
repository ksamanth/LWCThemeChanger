import { LightningElement , track} from 'lwc';
import { themes, themesAsOptions } from 'c/util';

export default class ParentChildWithTheme extends LightningElement {
    @track themes = themesAsOptions();
    initialLoadDone = false;
    @track selectedTheme;
    
    renderedCallback() {
        if(!this.initialLoadDone) {
            this.template.host.setAttribute('data-theme', 'sonokai');
            this.selectedTheme = 'sonokai';
            this.initialLoadDone = true;
        }
    }

    handleChange(event) {
        this.selectedTheme = event.target.value;
        this.template.host.setAttribute('data-theme', this.selectedTheme);
    }
}
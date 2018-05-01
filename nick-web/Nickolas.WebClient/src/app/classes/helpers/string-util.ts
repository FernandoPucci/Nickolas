export class StringUtil {

    // add 's' of true
    public static Pluralize(_canIPluralize: boolean): string {

        if (_canIPluralize) {
            return 's';
        } else {
            return '';
        }
    }

}

export const styles = ({ direction, spacing, wrap }) => ({
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction ? direction : 'row',
})
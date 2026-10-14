<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the fixed TanStack Start router and thin route metadata wrappers; business UI and content use JavaScript/JSX to honor the frontend brief without replacing the platform bootstrap.
- Keep verified business configuration and WhatsApp URL generation in src/data/holiday.js so every contact action uses one source.
- Isolate future PHP HTTP calls in src/services/api.js using VITE_API_URL; the initial frontend must render without a backend or simulated persistence.
- Use shared design tokens and Button variants for all Holiday visual styling and controls to preserve a cohesive editorial system.
